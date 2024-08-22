---
cover: ../.gitbook/assets/AdobeStock_235121794.png
coverY: 0
---

# Customer Success & Growth

LogicLoop can help your company automate your customer engagement & outreach. Oftentimes, information about a user's behavior on your platform lives in your company's database. LogicLoop empowers operations people to write rules directly on top of your product data in order to send reporting information to your internal team, or even direct outreach to your customers at the right time. First, [connect your company's data sources](../data-sources/data-sources/). Then, you can use sample industry templates below as guidance to bootstrap your program. Contact us at hi@getlogicloop.com to access our full suite of templates.

## Acquisition & Onboarding

### Track dip in website signups&#x20;

Detect if number of signups on the website has been low.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 10.46.46 AM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  count(*)
FROM
  user_signups
WHERE
  created_at < interval - '60 minutes'
HAVING
  count(*) < 10
```

</details>

Send a Slack alert to your team to investigate.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 10.50.18 AM.png>)

### Sending onboarding reminder emails&#x20;

Select users who signed up within the past week but are stuck between Step 2 and Step 3 of onboarding.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 11.39.24 AM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  *
FROM
  users
WHERE
  last_onboarded_stage = 'Step 2'
```

</details>

For each user, send them an email to remind them to complete Step 3. You can use HTML to stylize your email with custom branding.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 11.43.21 AM.png>)

## Engagement & Retention

### Send weekly product usage summary emails&#x20;

Retrieve customers and their key metrics on your platform.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 1.03.22 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  id,
  company_name,
  JSON_BUILD_OBJECT(
    'number_of_logins', num_logins,
    'number_of_conversions', num_conversions,
    'monthly_spend', monthly_spend,
    'amount_saved', amount_saved
  ) as product_usage_data
FROM
  users
```

</details>

For each customer, send a weekly email to show them their top stats on your platform. You can use HTML to present your email in an aesthetically pleasing table or image.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 1.06.25 PM.png>)

### Send milestone notifications&#x20;

Select customers who've reached a certain milestone on your platform. You can use our deduplication feature to not re-send the same notification to the same customer.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 1.18.29 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  count(*),
  user_id
FROM
  orders
GROUP BY
  user_id
HAVING
  count(*) > 3
```

</details>

For each customer, send them a congratulatory text

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 1.21.05 PM.png>)

### Upsell the most active users&#x20;

Select the most active users on your platform.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 1.29.22 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  count(*),
  user_id
FROM
  events
GROUP BY
  user_id
HAVING
  count(*) > 100
```

</details>

Send a Slack message to the Sales team for an account manager to reach out and upsell.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 1.30.37 PM.png>)

### Send churning users discounts

Select users who have been inactive on your platform.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 1.35.53 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  count(*),
  user_id
FROM
  events
WHERE
  created_at > current_date - interval '30 days'
GROUP BY
  user_id
HAVING
  count(*) = 0
```

</details>

For each user, email them a discount to encourage them to re-engage.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 1.37.58 PM.png>)

## Support

### Response time too high

Detect if average response time of your support team is too high.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-02 at 11.16.59 AM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  avg(first_responded_at - created_at) as avg
FROM
  tickets
HAVING
  avg(first_responded_at - created_at)  > interval '1 day'
```

</details>

Send an email report to a support manager.

![](<../.gitbook/assets/Screen Shot 2022-02-02 at 11.18.25 AM.png>)

### CSAT is low&#x20;

Detect if the average CSAT is too low

![](<../.gitbook/assets/Screen Shot 2022-02-02 at 11.21.05 AM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  avg(csat_score) as avg
FROM
  tickets
HAVING
  avg(csat_score) < 5
```

</details>

Send an email report to a support manager.

![](<../.gitbook/assets/Screen Shot 2022-02-02 at 11.22.16 AM.png>)

### Agent supply does not meet demand&#x20;

Detect if number of support agents is not enough to fulfill incoming tickets.

![](<../.gitbook/assets/Screen Shot 2022-02-02 at 11.39.14 AM.png>)

<details>

<summary>View SQL Query</summary>

```
WITH tickets_count AS (
  SELECT
    count(*) as num_tickets
  FROM
    transaction
  WHERE
    created_at > current_date - interval '1 hour'
)
SELECT
  *
FROM
  tickets_count
  JOIN agent_stats_query on True
WHERE
  num_tickets > 10 * agent_stats_query.number_of_agents
```

</details>

Send Slack message to #support-agents channel to find backup agents.

![](<../.gitbook/assets/Screen Shot 2022-02-02 at 11.40.42 AM.png>)
