# Generated by Django 4.2 on 2023-04-08 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('logs', '0002_alter_kmslog_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kmslog',
            name='id',
            field=models.CharField(editable=False, max_length=36, primary_key=True, serialize=False),
        ),
    ]