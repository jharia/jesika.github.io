# PagerDuty

You set up your LogicLoop rule to trigger a PagerDuty alert. First, create a PagerDuty action destination type.

![](<../../.gitbook/assets/Screen Shot 2022-01-25 at 5.12.52 PM.png>)

You will need a PagerDuty service integration key which is a webhook URL you can configure under your PageDuty Service's integration tab.&#x20;

![](<../../.gitbook/assets/Untitled - 2022-01-25T172006.577.png>)

Next, add an Action to your Rule with the PagerDuty integration you just set up. You can specify a description of the alert in your PagerDuty configuration, as well as [custom details](https://developer.pagerduty.com/api-reference/368ae3d938c9e-send-an-event-to-pager-duty).&#x20;

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-20 at 12.07.49 PM.png" alt=""><figcaption></figcaption></figure>

Here's what the alert will look like when it gets triggered in PagerDuty.&#x20;

![](<../../.gitbook/assets/Screen Shot 2022-03-29 at 2.58.03 PM (1).png>)

If the same LogicLoop alert triggers twice in a row, it create an alert under an existing PagerDuty incident instead of creating a new incident. If the incident is resolved, the next time the LogicLoop alert fires it will create a new PagerDuty incident.&#x20;
