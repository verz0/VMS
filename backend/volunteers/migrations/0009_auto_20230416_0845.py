# Generated by Django 3.2.12 on 2023-04-16 08:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('volunteers', '0008_auto_20230416_0840'),
    ]

    operations = [
        migrations.RenameField(
            model_name='registration',
            old_name='course',
            new_name='city',
        ),
        migrations.RenameField(
            model_name='registration',
            old_name='registration_no',
            new_name='phone_no',
        ),
    ]
