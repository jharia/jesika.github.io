# Groups & Permissions

## Data Source Permissions

In LogicLoop, permissions to access data sources are administered through groups. By default, all users are added to the **Default** group and the admin is added to the **Admin** group. We recommend maintaining these defaults.

### Create a new group

As an admin, you can create a new group by going to **Settings > Groups > + New Group** in order to specify a set of users who can only have access to a limited set of data sources.&#x20;

![](<../.gitbook/assets/Screen Shot 2021-10-08 at 2.39.56 PM.png>)

Once the group is created, you will be able to add new members to the group.

![](<../.gitbook/assets/Untitled (76).png>)

### Assign permissions

You will also be able to add data sources to the group to specify that the members in that group have access to those data sources. You may list the data source as **View Only** or **Full Access**. When a member has **Full Access** to a data source, they will be able to view all queries and dashboards created with that data source, and they will also be able to create new queries with that data source. When a member has **View Only** access to a data source, they will be able to view queries and dashboards with that data source, but they will not be able to create new queries with that data source.

![](<../.gitbook/assets/Untitled (77).png>)

Members who do not have access to certain data sources will not be able to view or edit queries or dashboards created with that data source.

### Granular permissions

You may assign more granular permissions to your data sources such as read-write permissions, and restrict access to only particular tables by taking advantage of your database's built-in security model. LogicLoop does not administer granular data source permissions, but we respect the permissions built-in to your data source. For example, if you create a new data source and enter credentials for a read-only user when you [set up that data source](../data-sources/data-sources/), LogicLoop will only be able to read from that data source.&#x20;

## Rule editing permissions

By default, all rules in LogicLoop are viewable and runnable by other teammates (who have access to the underlying data source generating the queries). However, rules are only editable by admins and the person who created the rule in the first place.&#x20;

### Invite teammates to edit your query

If you wish to allow your teammates to be able to edit a query that you wrote, you can simply invite them to your query by clicking on **Manage Permissions** in the top right corner of your rule.

![](<../.gitbook/assets/Screen Shot 2021-10-08 at 3.12.31 PM.png>)

You will be able to add the list of teammates you wish to give access to.

![](<../.gitbook/assets/Untitled (79).png>)

Your teammate can now edit and save your query.
