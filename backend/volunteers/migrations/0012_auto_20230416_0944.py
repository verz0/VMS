# Generated by Django 3.2.12 on 2023-04-16 09:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('volunteers', '0011_remove_registration_phone_no'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='time',
            field=models.TimeField(default=datetime.time(0, 0)),
        ),
        migrations.AddField(
            model_name='event',
            name='venue',
            field=models.CharField(default='Some Venue', max_length=100),
        ),
    ]
