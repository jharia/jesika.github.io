---
cover: ../.gitbook/assets/TEKsystems-Blog-Image-1200x672.jpeg
coverY: 0
---

# Healthcare

Digital heath companies use LogicLoop to manage patient care, increase engagement, and manage system logistics.&#x20;

### Upcoming prescription refills for patients&#x20;

Select all patients who have an upcoming refill.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 5.53.12 PM (1).png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  *
FROM
  patients
WHERE
  refill_date < current_date + interval '7 days'
```

</details>

Send them a text reminding them to pick up their meds.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 5.52.31 PM.png>)

### Collect on unpaid claims

Detect claims that still have not been paid for 90 days.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 5.57.44 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  *
FROM
  claims
WHERE
  status = 'unpaid'
  AND created_at > current_date - interval '90 days'
```

</details>

Send out an email to the insurance provider to collect.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 5.59.32 PM.png>)

### Lab results taking too long to process&#x20;

Detect lab results that have not been processed in over 30 days.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 6.12.48 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  *
FROM
  lab_results
WHERE
  status != 'complete'
  and created_at > current_date - interval '30 days'

```

</details>

Alert the team on Slack to investigate. &#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 6.14.17 PM (1).png>)

### Update vaccination status&#x20;

Select all patients that had a COVID vaccine at least 7 days ago.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 8.32.39 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  *
FROM
  patient
WHERE
  covid_vaccine_taken_at < current_date - interval '7 days'
```

</details>

Update the status of those patients to 'Fully Vaccinated' by [writing to your data source](../actions/destinations/write-to-database.md).&#x20;

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 8.34.57 PM.png>)

### Alert on poor lab conditions

Alert if humidity levels in the lab room are too high.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 9.43.31 PM.png>)

<details>

<summary>View SQL Query</summary>

```
SELECT
  humidity
FROM
  lab_stats
WHERE
  humidity > 75
```

</details>

Send a PagerDuty alert for someone to investigate.

![](<../.gitbook/assets/Screen Shot 2022-02-01 at 9.41.40 PM.png>)
