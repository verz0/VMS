# Generated by Django 3.2.12 on 2023-04-18 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('volunteers', '0012_auto_20230416_0944'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
