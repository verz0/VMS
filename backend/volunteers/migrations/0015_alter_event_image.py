# Generated by Django 3.2.12 on 2023-04-18 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('volunteers', '0014_alter_event_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
