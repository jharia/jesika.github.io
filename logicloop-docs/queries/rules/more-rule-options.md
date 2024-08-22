# More rule options

## **Advanced Scheduling**

When configuring rule schedules that occur more frequently than daily, you have the flexibility to customize the specific days of the week and the time range during which you want the rule to automatically run. This feature enables you to schedule rules to run frequently, but restricts their execution to specific business operating hours.

<figure><img src="../../.gitbook/assets/Screenshot 2024-01-15 at 11.16.45 AM.png" alt=""><figcaption></figcaption></figure>

## **Parametrize a rule**

Not everyone on your team knows SQL? LogicLoop helps you write the queries and parametrize them so your teammates can pull business levers without knowing how to write SQL.&#x20;

Parameters can be dropdown lists, dates and plain text values.&#x20;

![](<../../.gitbook/assets/image (58).png>)

To add a parameter, click the curly braces at the bottom of your query editor or press Cmd + P.  Alternately, you can just type double curly brackets to insert a parameter into your query.

![](<../../.gitbook/assets/image (60).png>)

The **Add Parameter** modal will now let you define the keyword, title and type of the parameter.

![](<../../.gitbook/assets/image (41).png>)

#### Query-Based Parameters

Another useful functionality of parameterization is being able to pull from another query a list of values. Dropdown lists can be tied to the results of an existing query. Just click `Query Based Dropdown List` under **Type** in the settings panel. Search for your target query in the **Query to load dropdown values from** bar.

If your target query returns more than one column, LogicLoop uses the _first_ one. If your target query returns `name` and `value` columns, LogicLoop populates the parameter selection widget with the `name` column but executes the query with the associated `value`.

For example, let's say in your query you want select users who fall into a few whitelisted categories that you have defined in GSheets. You can write a query like: `select * from users where category in ({{ list_of_categories_from_gsheets }})`. In your parameter's configuration, you can select it to automatically populate with values from another query that [retrieves the list of categories from GSheets](../../data-sources/supported-data-sources/google-sheets.md).

![](<../../.gitbook/assets/image (34).png>)

## Visual Query Builder

Users who don't know SQL can use LogicLoop's Visual Query Builder to query for data just by choosing a few drop down filters. If your database is Postgres, MySQL, Redshift, Snowflake, or BigQuery, the option to use the Visual Query Builder will automatically show up in the top right corner of your query's page.

<figure><img src="../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>

## Tag a rule

It can be very useful to group rules by function. You can tag a rule by going to the edit rule page and hovering to the right of the rule name, you should see + Add tag.&#x20;

![](<../../.gitbook/assets/image (75).png>)

You should see a popup that lets you add multiple tags or create them.&#x20;

![](<../../.gitbook/assets/image (78).png>)

Now you can filter by tags in the main rules listing page.&#x20;

## Export your query data

You can export data returned from a query as a CSV, TSV, or Excel file by clicking on the three dots at the bottom left corner of your query.

![](<../../.gitbook/assets/Screen Shot 2021-10-08 at 3.42.18 PM.png>)

## Add a rule to your favorites

You can add a rule to your favorites section by clicking on the little star button next to your rule.

![](<../../.gitbook/assets/Screen Shot 2021-10-08 at 3.46.48 PM.png>)

## Archive a rule

If you want to delete a rule because you don't need it anymore, simply go to the top right corner of your rule and hit **Archive.** Archived rules will no longer run.

![](<../../.gitbook/assets/Screen Shot 2021-10-08 at 3.48.16 PM.png>)

## Rule Filtering

The LogicLoop **Rules** page supports filtering for convenient navigation and analysis of your workspace. Rules can be filtered by author, run schedule, and action status.

<div>

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 2.19.42 PM (3).png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 2.20.16 PM.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/Screenshot 2023-08-11 at 2.20.07 PM (3).png" alt=""><figcaption></figcaption></figure>

</div>

### Filter by Data Source

You can see all rules that run on the same data source.

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-17 at 10.47.48 AM.png" alt=""><figcaption></figcaption></figure>

### Filter by Destination

You can see all rules whos action is sent to the same destination.

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-17 at 10.48.10 AM.png" alt=""><figcaption></figcaption></figure>
