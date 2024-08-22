---
description: Risk Rules Engine
cover: ../.gitbook/assets/Fraud Monitoring.jpeg
coverY: 0
---

# AML Transaction Monitoring Rules

Fast growing fintech startups use LogicLoop to monitor abusive behavior on their platforms and stay compliant with FINRA, SEC and BSA/AML requirements. [LogicLoop empowers compliance managers to quickly set up rules on top of company data to raise alerts for their team to review](https://www.logicloop.com/fintech). Without LogicLoop, analysts are often stuck waiting for engineers to implement alerts directly in the codebase, inhibiting their ability to iterate quickly and experiment.&#x20;

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

Specifically, [FINRA has released an AML monitoring template for small firms](https://www.finra.org/compliance-tools/anti-money-laundering-template-small-firms). LogicLoop can help you put these rules in practice, with our complete set of templates. Some examples of the templates we have available are:&#x20;

* Large transactions: Transactions over $10,000
* Internal Transfers: Inbound and Outbound Transfers (ACH Debit and ACH Credits) > $3K in Last 3 days
* Structuring: At least three credit transactions of at least $9,000 on a rolling 30 day basis
* Breaking up transfers: More than 5 transactions between the same parties in 30 days
* Sequential transfers: More than 3 money order or checks are sequentially numbered between the same parties in the last 30 days
* Profile update before deposit: Users changed bank account details less than 2 days before a deposit
* Profile update before withdrawal: Users changed bank account details less than 10 days before withdrawal
* Profile update frequency: User changed material aspects of profile more than 5 times in last 30 days
* Incoming and outgoing check timing: Percent of outgoing checks made within 3 days of incoming checks in last 30 days
* Payments source: Name of person or institution making payments is not same as name of user
* Geography of transaction: Transfers to or from a high-risk location or conflict zone
* Geography of parties: Originator or beneficiary of transactions are from countries that are high-risk
* High volume: User completes more than 10 transactions per day on average for last 30 days
* Round dollar value: More than 30% transactions with round or whole dollar amounts in last 30 days
* Dormant account activity: New transactions on accounts that have been inactive >60 days
* ATM activity: Frequent ATM activity below BSA/AML reporting thresholds

