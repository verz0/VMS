# Generated by Django 3.2.12 on 2023-04-13 17:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('volunteers', '0002_customuser'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]
