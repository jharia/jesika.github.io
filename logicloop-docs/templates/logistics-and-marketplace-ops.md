---
cover: ../.gitbook/assets/delivery-food-queens-in-new-york-city-5.jpeg
coverY: 0
---

# Logistics & Marketplace Ops

Marketplaces, eCommerce shops, and business with logistics/coordination-heavy functions use LogicLoop to manage day to day operations. Your company is growing and operations is the first to go underwater. LogicLoop empowers operations people to quickly set up rules on top of company data to trigger alerts and workflows. Without LogicLoop, operators are often stuck refreshing dashboards and manually copy and pasting excel spreadsheets.&#x20;

To get started, you'll first want to [connect your company's data sources](../data-sources/data-sources/). This could be production databases like Postgres or MySQL, warehouses like Snowflake, Redshift or Big Query, or APIs. Once connected, you can use sample industry templates below as guidance to bootstrap your program. Contact us at hi@getlogicloop.com to access our full suite of templates.

### Order volume drop

Detect if order volume is beneath a certain minimum threshold.

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 7.28.38 PM (1).png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  count(*)
FROM
  orders
WHERE
  created_at > current_data - interval '60 minutes'
HAVING
  count(*) < 10
```



</details>

Fire a PagerDuty alert for someone on your team to investigate.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 7.26.13 PM.png>)

### Restock your inventory

Detect if inventory levels are low for any particular SKU.

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 7.34.33 PM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  inventory
WHERE
  stock_count < 100
```

</details>

Then, automatically call your supplier's API to order more.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 7.37.10 PM.png>)

### Alert if warehouse conditions are not optimal

Detect if the temperature or other conditions inside a warehouse are not optimal.

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 7.41.58 PM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  temp
FROM
  warehouse_stats
WHERE
  temp > 80
```

</details>

Fire a Slack alert for a manager to review and adjust.

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 7.45.16 PM.png>)

### Expired stock or upcoming expiry

Detect if any stock is expiring soon.

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 7.56.56 PM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  items
where
  expiry_date < now() + '30 days'
```

</details>

Then, email a manager to enact a discount or make plans for discarding expiring stock.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 7.59.13 PM.png>)

### Alert customers of shipping delays

Select customers whose orders are delayed.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 8.35.39 PM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  orders
WHERE
  shipped_at < now() - '5 days'
  AND status = 'in_transit'
```

</details>

For each customer, send them a text informing them shipping has been delayed but rest assured their order is on the way.

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 8.31.14 PM.png>)

### Adjust ad spend to balance supply and demand

Detect if supply or demand in any given area is low.

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 10.57.02 PM.png>)

<details>

<summary>View SQL Query</summary>

```sql
SELECT
  *
FROM
  cities
WHERE
  demand > supply * 2
```

</details>

Automatically call the Facebook Ads API to increase ad spend in that area to boost supply or demand.

![](<../.gitbook/assets/Screen Shot 2022-01-31 at 11.09.23 PM.png>)
