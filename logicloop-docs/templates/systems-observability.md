---
cover: ../.gitbook/assets/Uptime-vs-Availability.png
coverY: 0
---

# Systems Observability

You can use LogicLoop to monitor systems uptime. Your company may already be using tools like Sentry and Datadog for infrastructure monitoring. In addition, users have found LogicLoop useful to monitor data-driven metrics and external APIs that aren't easily captured by Sentry or Datadog. See below for some examples.

### Alert when an API is down

Every 10 minutes, query an API your service relies on. The API can be an external or internal service.

![](<../.gitbook/assets/Untitled (19).svg>)

If the request fails, LogicLoop will send you an email notifying you of the failure.

![](<../.gitbook/assets/Untitled (20).svg>)

### Monitor a drop in new user sign ups

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

### Monitor drop in a critical business unit

Similarly, you can use LogicLoop to monitor when there's a drop or change in a unit critical to your business.&#x20;

Digital health companies: monitor a drop in the number of appointments scheduled today.

Recruiting companies: monitor a drop in the number of candidates who were scheduled for interviews today.

E-commerce companies: monitor a drop in the number of orders placed in the past hour.

Ride-share marketplace: monitor the number of rides completed in the past hour.

### Monitor applications stuck in processing

Select all applications that are still processing after a certain amount of time.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 3.43.13 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  *
FROM
  applications
WHERE
  status = 'pending'
HAVING
  AND created_at > current_date - interval '7 days'
```

</details>

Create an Asana ticket for an analyst to review.

![](<../.gitbook/assets/Untitled (22).svg>)

### Monitor invalid database fields&#x20;

Query for fields that should not be `Null`

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 3.58.49 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  *
FROM
  users
WHERE
  email is NULL
```

</details>

Create a JIRA ticket for an engineer to review.

![](<../.gitbook/assets/Untitled (23).svg>)

### Monitor children database objects with no parent

Query for children objects that are orphaned.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 4.08.59 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  *
FROM
  children
WHERE
  parent is NULL
```

</details>

Create a PagerDuty alert for an engineer to review immediately.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 4.10.02 PM.png>)

