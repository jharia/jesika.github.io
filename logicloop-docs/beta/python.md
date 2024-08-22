# Python

{% hint style="warning" %}
#### Beta features are available to users before official release. Your testing and feedback are an enormous help, please leave any feedback or bug reports you have at support@logicloop.com. Note that beta features are subject to change.
{% endhint %}

LogicLoop offers a Python script execution environment to enhance your data analysis capabilities.

## Accessing the Python Data Source

For security, the Python data source is disabled by default. To enable it, please reach out to **support@logicloop.com**. Once enabled, you can create a Python data source from **Settings > Data Sources**.

## Generating Results in LogicLoop

In LogicLoop, you can build result tables by inspecting the final state of your script execution for a variable named `result`. This variable should follow a specific format, as demonstrated in the example below:

```python
result = {
  "columns": [
    {
      "name": "date",
      "type": "date",
      "friendly_name": "date"
    },
    {
      "name": "day_number",
      "type": "integer",
      "friendly_name": "day_number"
    },
    {
      "name": "value",
      "type": "integer",
      "friendly_name": "value"
    },
    {
      "name": "total",
      "type": "integer",
      "friendly_name": "total"
    }
  ],
  "rows": [
    {
      "value": 40832,
      "total": 53141,
      "day_number": 0,
      "date": "2014-01-30"
    },
    {
      "value": 27296,
      "total": 53141,
      "day_number": 1,
      "date": "2014-01-30"
    },
    {
      "value": 22982,
      "total": 53141,
      "day_number": 2,
      "date": "2014-01-30"
    }
  ]
}
```

When you execute the above snippet in LogicLoop, it will return a table like this:

| date       | day\_number | value | total |
| ---------- | ----------- | ----- | ----- |
| 2014-01-30 | 0           | 40832 | 53141 |
| 2014-01-30 | 1           | 27296 | 53141 |
| 2014-01-30 | 2           | 22982 | 53141 |



{% hint style="info" %}
If you require additional Python libraries to support your queries in LogicLoop, please reach out at **support@logicloop.com**. We will be happy to assist you in adding the necessary libraries to enhance your scripting capabilities.
{% endhint %}
