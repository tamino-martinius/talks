# Lets talk about - SQL Query Performance by Tamino

[View Slides](https://sql-query-performance.lets-talk-about.tamino.dev)

A presentation covering practical techniques for improving SQL query performance, including:

- **Selecting columns wisely** — why `SELECT *` costs more than selecting specific columns
- **Using LIMIT** — dramatically reducing query cost by limiting result sets
- **Counting efficiently** — why naive `COUNT` is expensive and how subqueries with `LIMIT` fix it
- **Ordering with indexes** — the massive cost reduction from indexing `ORDER BY` columns
- **Choosing the right index type** — e.g. GIN indexes for array columns vs. standard B-tree
- **Avoiding JOINs when possible** — when JOINs hurt, and alternative strategies like fetching separately and linking in code

The talk builds up five practical rules:

1. LIMIT results
2. LIMIT counts
3. INDEX sort columns
4. INDEX filter columns (with the right index)
5. Avoid JOINs (if possible)

Examples use PostgreSQL with `EXPLAIN` output and Rails/ActiveRecord context.

---

Built with [lets-talk-about](https://github.com/tamino-martinius/lets-talk-about)
([npm](https://www.npmjs.com/package/lets-talk-about)) — a tool for creating slideshows from Markdown.
