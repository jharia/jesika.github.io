---
description: Create JSON Objects from your data for flexible use in actions and automations
---

# Render Data as JSON

{% hint style="warning" %}
#### All beta features are available to users before official release. Your testing and feedback are an enormous help, please leave any feedback or bug reports you have at support@logicloop.com. Note that beta features are not guaranteed to be supported or compatible in the future.
{% endhint %}

#### Using JSON in Templates

JSON objects have already been natively supported for PostgreSQL and Redshift. Historically we allow users to dynamically render json data in a template using [mustache:](https://mustache.github.io/mustache.5.html)

```
{{#column_name}}
{{name}} is name
{{/column_name}}
```

We're adding support for iterating over JSON objects in action templates for more data sources.

#### Format your Data as a JSON object

We have introduced a naming convention to append the prefix `type_json_` to a column which will signal LogicLoop to parse the column value into JSON. All columns you return whose names start will `type_json` will be parsed as JSON.

<figure><img src="../.gitbook/assets/Screenshot 2022-11-22 at 9.39.33 AM.png" alt=""><figcaption><p>Example Query Casting String Response to JSON Object</p></figcaption></figure>

#### Use Your Object in an Action

Once you have a rule that creates a JSON object, you can use the JSON object in an action. You can use [action templating](../actions/templating.md) to iterate over and access the values in your objects.

<figure><img src="../.gitbook/assets/Screenshot 2022-12-15 at 10.46.49 AM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
This feature is only available when triggering the action under the setting:

`For each row returned`
{% endhint %}
