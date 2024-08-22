---
description: See how efficiently your team resolves cases & suggest rule improvements
---

# Case Analytics

{% hint style="warning" %}
#### All beta features are available to users before official release. Your testing and feedback are an enormous help, please leave any feedback or bug reports you have at support@logicloop.com. Note that beta features are not guaranteed to be supported or compatible in the future.
{% endhint %}

## LogicLoop Case Analytics

LogicLoop's Case Analytics feature empowers you to harness your LogicLoop data as a valuable data source for querying, alerting, automation, and visualization. With Case Analytics, you can unlock insights, streamline workflows, and enhance decision-making by leveraging your own data in LogicLoop. This documentation will guide you through the steps to effectively utilize Case Analytics for tasks such as triggering escalations, monitoring team efficiency, and refining your ruleset and alerting.

### Leveraging Case Analytics

Follow these steps to effectively leverage LogicLoop's Case Analytics feature:

#### 1. Add Your [Data Source](../data-sources/data-sources/) (LogicLoop Data)

1. Log in to your LogicLoop account as an admin user.
2. Go to the **Settings > Data Sources** tab.&#x20;
3. Click on the option to "Add Data Source."
4. Select "LogicLoop Data" as the data source type.

<figure><img src="../.gitbook/assets/Screenshot 2023-08-14 at 4.35.55 PM.png" alt=""><figcaption></figcaption></figure>

#### 2. [Write a Rule](../queries/rules/)

1. Navigate to the **Rules** tab on the left sidebar, then click **+ New Rule**
2. Select your LogicLoop Data schema&#x20;
3. Write your SQL query, click **View Results** to check it looks good, and **Save**. You can make changes and re-run to fine-tune your results.
4. [Specify the actions](../actions/actions.md) that should be taken when the rule is triggered. This could include sending alerts, automating tasks, or updating records in external systems.

<figure><img src="../.gitbook/assets/Screenshot 2023-08-14 at 4.39.32 PM.png" alt=""><figcaption></figcaption></figure>

#### 3. Create [Visualizations & Dashboards](../queries/visualizations-and-dashboards/)

1. To visualize your query's results, click on **+ Add Visualization** button under the query text box.&#x20;
2. Choose the type of visualization that best suits your analytics goals, such as charts, graphs, or tables.
3. Customize the visual appearance to match your preferences and requirements.

<figure><img src="../.gitbook/assets/Screenshot 2023-08-14 at 4.43.42 PM.png" alt=""><figcaption></figcaption></figure>

### Example Use Cases

#### 1. Escalation Trigger

Suppose you're managing customer support cases, and you want to escalate unresolved cases based on specific criteria.

1. Add your LogicLoop case data source.
2. Write a rule that identifies cases unresolved for a certain period.
3. Configure the rule to trigger an alert or task assignment for further escalation.

#### 2. Team Efficiency Monitoring

You aim to monitor your support team's performance by analyzing case resolution times and trends.

1. Add your LogicLoop case data source.
2. Create a visualization that displays average resolution times over different time intervals.
3. Use this visualization to identify areas for improvement and recognize efficient periods.

#### 3. Ruleset Refinement

As you use LogicLoop for various automation, you want to refine your ruleset based on observed outcomes.

1. Analyze historical data from LogicLoop using your case data source.
2. Identify patterns and outcomes resulting from rule activations.
3. Adjust and optimize your ruleset based on data-driven insights.

### Conclusion

LogicLoop's Case Analytics feature empowers you to transform your LogicLoop data into actionable insights, automated workflows, and informative visualizations. By following the steps outlined in this documentation, you can effectively add data sources, write rules, and create visualizations to enhance your processes, make informed decisions, and drive efficiency within your organization.

{% hint style="info" %}
To enable access to LogicLoop Data for your account, ask us at **support@logicloop.com**
{% endhint %}
