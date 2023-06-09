# Generated by Django 3.2.12 on 2023-04-13 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('volunteers', '0003_delete_customuser'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('description', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='events/')),
            ],
        ),
    ]
