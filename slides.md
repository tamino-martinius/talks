---
title: Lets talk about ... SQL Query Performance
---

---
build: true

## Lets talk about ...
## SQL Query Performance

---
build: true

## Tools
- ```
  rails db
  ```
- ```
  EXPLAIN
  ```
- ```
  ActiveRecord::Base.connection
    .execute('SQL').to_a
  ```

---

# Basics

---
build: true

- SELECT *
- ```sql
  SELECT *
  FROM staff_shifts;
  ```
- ```
  (cost=0.00..133081.67 rows=5852267 width=74)
  ```
- SELECT column
- ```sql
  SELECT id
  FROM staff_shifts;
  ```
- ```
  (cost=0.00..133081.67 rows=5852267 width=4)
  ```

---
build: true

- Selected columns show no difference in cost
- BUT it's shown in the width of a query
- ```
(5523.0ms)  SELECT * FROM staff_shifts
```
- ```
(783.0ms)  SELECT id FROM staff_shifts
```
- DON'T forget the parser

---
build: true

## LIMIT
- ```sql
  SELECT *
  FROM staff_shifts;
  ```
- ```
  (cost=0.00..133081.67 rows=5852267 width=74)
  ```

---
build: true

## LIMIT
- ```sql
  SELECT *
  FROM staff_shifts
  LIMIT 100;
  ```
- ```
  (cost=0.00..2.27 rows=100 width=74)
  ```
- ```
  (cost=0.00..133081.67 rows=5852267 width=74)
  ```

---
build: true

## Rules
- 1. LIMIT results

---

## COUNT

---

## COUNT is expensive

---
build: true

## COUNT
- ```sql
  SELECT COUNT(*)
  FROM staff_shifts;
  ```
- ```
  (cost=147712.34..147712.35 rows=1 width=0)
  ```
- ```
  (1171.2ms)  SELECT count(*) FROM staff_shifts
  ```

---
build: true

## COUNT
- ```sql
  SELECT COUNT(id)
  FROM staff_shifts;
  ```
- ```
  (cost=147712.34..147712.35 rows=1 width=4)
  ```
- ```
  (1481.2ms)  SELECT count(id) FROM staff_shifts
  ```

---
build: true

## LIMIT COUNT
- ```sql
  SELECT COUNT(*)
  FROM staff_shifts
  LIMIT 1000;
  ```
- ```
  (cost=147712.34..147712.35 rows=1 width=0)
  ```
- ```
  (1171.2ms)  SELECT count(*) FROM staff_shifts
  ```

---
background: assets/images/fuuuuu.jpg

&nbsp;

---
build: true

## LIMIT COUNT (done right)
- ```sql
  SELECT COUNT(*) FROM (
    SELECT id
    FROM staff_shifts
    LIMIT 1000
  );
  ```
- ```
  (cost=35.24..35.25 rows=1 width=0)
  ```
- ```
  (7.0ms)  SELECT count(*) FROM ...
  ```

---
build: true

## LIMIT COUNT (done perfect)
- ```sql
  SELECT COUNT(*) FROM (
    SELECT 1
    FROM staff_shifts
    LIMIT 1000
  );
  ```
- ```
  (cost=35.24..35.25 rows=1 width=0)
  ```
- ```
  (6.3ms)  SELECT count(*) FROM ...
  ```

---
build: true

## Rules
- 1. LIMIT results
- 2. LIMIT counts

---
build: true

## ORDER
- ```sql
  SELECT id
  FROM staff_shifts
  ORDER BY created_at;
  ```
- ```
  (cost=990924.99..1005555.66 rows=5852267 width=12)
  ```

---
build: true

## ORDER LIMIT
- ```sql
  SELECT *
  FROM staff_shifts
  ORDER BY created_at
  LIMIT 100;
  ```
- ```
  (cost=356751.11..356751.36 rows=100 width=12)
  ```
- ```
  (cost=990924.99..1005555.66 rows=5852267 width=12)
  ```

---
build: true

## indexed ORDER
- ```sql
  SELECT *
  FROM staff_shifts
  ORDER BY created_at
  LIMIT 100;
  ```
- ```
  (cost=0.43..5.37 rows=100 width=12)
  ```
- ```
  (cost=990924.99..1005555.66 rows=5852267 width=12)
  ```

---
build: true

## Rules
- 1. LIMIT results
- 2. LIMIT counts
- 3. INDEX sort columns

---
build: true

## INDEXES
- ```sql
  SELECT id
  FROM shiftplan_notifications
  WHERE shift_id = ?;
  ```
- ```
  (cost=0.00..60555.66 rows=4 width=4)
  ```

---
build: true

## INDEXES
- ```sql
  CREATE INDEX shiftplan_notifications__shift_id
  ON shiftplan_notifications (shift_id);
  ```

---
build: true

## INDEXES
- ```sql
  SELECT id
  FROM shiftplan_notifications
  WHERE shift_id = ?;
  ```
- ```
  (cost=0.43..10.82 rows=4 width=4)
  ```
- ```
  (cost=0.00..60555.66 rows=4 width=4)
  ```

---
build: true

## Rules
- 1. LIMIT results
- 2. LIMIT counts
- 3. INDEX sort columns
- 4. INDEX filter columns

---
build: true

## INDEXES
- ```sql
  SELECT id
  FROM shiftplan_notifications
  WHERE employment_ids @> ARRAY[?];
  ```
- ```
  (cost=0.00..60555.66 rows=159 width=4)
  ```

---
build: true

## INDEXES
- ```sql
  CREATE INDEX shiftplan_notifications__employment_ids
  ON shiftplan_notifications (employment_ids);
  ```

---
build: true

## INDEXES
- ```sql
  SELECT id
  FROM shiftplan_notifications
  WHERE employment_ids @> ARRAY[?];
  ```
- ```
  (cost=0.00..60555.66 rows=159 width=4)
  ```
- ```
  (cost=0.00..60555.66 rows=159 width=4)
  ```

---
background: assets/images/fuuuuu.jpg

&nbsp;

---
build: true

## INDEXES
- ```sql
  CREATE INDEX shiftplan_notifications__employment_ids
  ON shiftplan_notifications
  USING GIN (employment_ids);
  ```

---
build: true

## INDEXES
- ```sql
  SELECT id
  FROM shiftplan_notifications
  WHERE shift_id = ?;
  ```
- ```
  (cost=17.23..623.83 rows=159 width=4)
  ```
- ```
  (cost=0.00..60555.66 rows=159 width=4)
  ```

---
build: true

## Rules
- 1. LIMIT results
- 2. LIMIT counts
- 3. INDEX sort columns
- 4. INDEX filter columns (with the right index)

---

# JOINs
## &nbsp;

---

# JOINs
## are BAD

---

# JOINs
## are BAD (sometimes)

---

# JOINs
## are BAD ~~(sometimes)~~ mostly

---
build: true

## When to use JOIN
- ALL where filter columns are in the base table
- ALL ORDER BY columns are in the base table
- ALL joined tables have a 1:n relation to the base table

---
build: true

## How to handle filter columns
- Fetch ids and filter in base table
- EXCEPTION:
  - Amount of plucked ids is usually HUGE

---
build: true

## How to handle order columns
- Create persistent views
- Create cached tables

---
build: true

## How to handle n:m relations
- Fetch data from base table
- Fetch data from join tables seperately
- Link them logically in code

---
build: true

## Rules
- 1. LIMIT results
- 2. LIMIT counts
- 3. INDEX sort columns
- 4. INDEX filter columns (with the right index)
- 5. Avoid JOINs (if possible)

---
type: section

# Questions?
