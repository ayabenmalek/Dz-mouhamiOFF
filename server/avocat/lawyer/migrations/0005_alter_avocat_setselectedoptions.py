# Generated by Django 5.0.1 on 2024-01-26 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lawyer', '0004_alter_admin_date_joined_alter_admin_is_active_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avocat',
            name='setSelectedOptions',
            field=models.JSONField(default=list),
        ),
    ]
