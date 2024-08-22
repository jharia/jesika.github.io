---
description: Risk Rules Engine
cover: ../.gitbook/assets/Fraud Monitoring.jpeg
coverY: 0
---

# Risk & Fraud Rules

Fast growing financial technology companies use LogicLoop to monitor abusive behavior on their platforms. [LogicLoop empowers fraud & risk managers to quickly set up rules on top of company data to raise alerts for their team to review](https://www.logicloop.com/fintech). Without LogicLoop, analysts are often stuck waiting for engineers to implement alerts directly in the codebase, inhibiting their ability to iterate quickly and experiment.&#x20;

To get started with monitoring bad actors on your platform on LogicLoop, you'll first want to [connect your company's data sources](../data-sources/data-sources/). This could be production databases like Postgres or MySQL, warehouses like Snowflake, Redshift or Big Query, or APIs like [Socure](https://www.socure.com/) or [Sentilink](https://www.sentilink.com/). Once connected, you can use sample industry templates below as guidance to bootstrap your program. The following templates have been simplified and specific details have been omitted due to the sensitive nature of the content. Contact us at hi@getlogicloop.com to access our fully detailed suite of fraud & risk monitoring formulas.

### Large transactions

Query your data to select transactions with large dollar amounts.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-28 at 1.29.09 PM.png>)

<details>

<summary>View SQL Query</summary>

```plsql
SELECT 
    *
FROM
    transaction
WHERE
    amount > 10000
```

</details>

For each transaction flagged, create a ticket for your analysts to review. You can automatically generate a ticket in LogicLoop's [Case Management System](../case-management/case-management/).

![](<../.gitbook/assets/Screen Shot 2022-01-28 at 1.34.33 PM.png>)

### Excessive failed transfers

Query your database to flag users with excessive failed external fund transfers.

![](<../.gitbook/assets/Screen Shot 2022-01-28 at 1.42.58 PM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  company_name,
  merchant_id,
  transfers.status,
  count(*) AS num_failed_transfers
FROM
  transfers
  JOIN merchant ON merchant.id = merchant_id
WHERE
  created_on > current_date - interval '30 days'
  AND transfers.status = 'FAILED'
GROUP BY
  merchant_id,
  company_name,
  transfers.status
HAVING
  count(*) >= 3
```

</details>

For each user flagged, generate a Slack alert for your team to review.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-28 at 1.47.25 PM.png>)

### High velocity transactions for new users

Query your data to flag users who signed up recently with high total transaction volumes.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-29 at 10.24.15 AM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  sum(amount) AS total,
  merchant_id
FROM
  transaction
  join merchant ON merchant_id = merchant.id
WHERE
  transaction.created_at > current_date - interval '30 days'
  AND merchant.created_at > current_date - interval '30 days'
GROUP BY
  merchant_id
HAVING
  sum(amount) > 200000
```

</details>

For each user flagged, [trigger a webhook ](../actions/destinations/webhooks.md)to create a ticket in your own internal system or another ticket management system like Salesforce, Zendesk, JIRA, or Asana for an analyst to review.&#x20;

![](<../.gitbook/assets/Untitled - 2022-01-29T103557.236.png>)

### Missing address information&#x20;

Select users who signed up recently without address information

![](<../.gitbook/assets/Screen Shot 2022-01-29 at 10.45.23 AM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  users
WHERE
 address is NULL
 AND created_at < current_date - interval '7 days'
```

</details>

Then, send each user an email reminding them to fill out their address.

![](<../.gitbook/assets/Screen Shot 2022-01-29 at 10.49.23 AM.png>)

### Failed identity verification

Flag users who failed identity verification checks. You can pull in information from third party APIs using our [API (JSON)](../data-sources/supported-data-sources/json-apis.md) data source and write a rule on top of [Query Results](../data-sources/supported-data-sources/query-results.md) to join data from multiple sources.

![](<../.gitbook/assets/Untitled - 2022-01-29T110142.721.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  socure_identity_verification_checks_api
WHERE
 status = 'Failed'
```

</details>

For each user flagged, create a ticket for an analyst to review and follow up.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-29 at 11.05.54 AM.png>)

### Transactions in high-risk geographies

Alert on transactions conducted from high-risk geographies. If you have a pre-defined list of countries that are deemed high-risk, you can pull in this list of values by [parameterizing it](../queries/rules/more-rule-options.md) and populating it with a list derived from another query.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-29 at 11.30.28 AM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  transaction
WHERE
  country in {{ list_of_banned_countries }}
```

</details>

Then, [call an internal webhook endpoint ](../actions/destinations/webhooks.md)to automatically ban the transaction in your system.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-08 at 10.16.19 AM (2).png>)

### Amount outstanding exceeds account balance

Alert if a user's outstanding balance exceeds the funds that are available in their account.

![](<../.gitbook/assets/Screen Shot 2022-01-29 at 12.04.41 PM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  users
WHERE
 account_balance < outstanding_balance
```

</details>

Send an account manager a Slack notification to reach out to the user to fund their account.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-29 at 12.06.20 PM.png>)

### Device intelligence: suspicious IPs

Flag users whose IP correspond with users who have already been identified as fraudulent.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 3.25.50 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  users
WHERE
  ip_address in (
    SELECT
      ip_address
    from
      users
    where
      status = 'fraud'
  )
```

</details>

### Loan payments late

Alert on payments that are more than 30 days past due.

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 3.09.11 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  payments
WHERE
  due_date < current_date - interval '30 days'
```

</details>

### Borrowers with excessive delinquent payments

Flag users who have been late on over 10 loan payments by more than 30 days.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 3.15.49 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  user_id, count(*)
FROM
  payments
WHERE
  paid_date > due_date + interval '30 days' OR paid_date is NULL
GROUP BY
 user_id
HAVING
  count(*) > 10
```

</details>

### Structured transactions

Alert if a transaction amount is close to a regulatory threshold.

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 2.06.32 PM (1).png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  transaction
WHERE
  amount > 9000 and amount < 10000
```

</details>

### Withdrawals to multiple bank accounts

Flag if a user has withdrawn funds to over 3 different bank accounts.

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 2.09.53 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  bank_account_id, count(*)
FROM
  withdrawals
WHERE
  created_at > current_date - interval '30 days'
GROUP BY
 bank_account_id
HAVING
  count(*) > 3
```

</details>

### Too many peer to peer transfers

Flag if a user has made peer to peer transfers to over 10 different accounts in a month.

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 2.15.01 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  receiver_user_id, count(*)
FROM
  transfers
WHERE
  created_at > current_date - interval '30 days'
GROUP BY
 receiver_user_id
HAVING
  count(*) > 10
```

</details>

### Too many transactions

Alert if a user has greater than 5 transactions in the past month.

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 2.02.11 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

<pre class="language-sql"><code class="lang-sql"><strong>SELECT
</strong>  user_id, count(*)
FROM
  transaction
WHERE
  created_at > current_date - interval '30 days'
GROUP BY
  user_id
HAVING
  count(*) > 5
</code></pre>

</details>

### Excessive deposits

Flag users who've deposited more than $20,000 in their account in the past month.

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 2.23.47 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  sum(amount) AS total,
  user_id
FROM
  deposit
WHERE
  created_at > current_date - interval '30 days'
GROUP BY
  user_id
HAVING
  sum(amount) > 20000
```

</details>

### Excessive withdrawals

Flag users who've withdrawn more than $20,000 from their account in the past month.

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 2.24.11 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  sum(amount) AS total,
  user_id
FROM
  withdrawals
WHERE
  created_at > current_date - interval '30 days'
GROUP BY
  user_id
HAVING
  sum(amount) > 20000
```

</details>

### Excessive buy or sell orders

Flag users who've bought or sold orders in excess of $20,000 in the past month

<figure><img src="../.gitbook/assets/Screenshot 2023-02-08 at 2.25.48 PM.png" alt=""><figcaption></figcaption></figure>

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  sum(amount) AS total,
  user_id
FROM
  orders
WHERE
  created_at > current_date - interval '30 days'
GROUP BY
  user_id
HAVING
  sum(amount) > 20000
```

</details>

