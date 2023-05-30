# Generated by Django 4.2 on 2023-06-06 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('logs', '0005_delete_kmslog'),
    ]

    operations = [
        migrations.CreateModel(
            name='KMSDBLog',
            fields=[
                ('id', models.CharField(editable=False, max_length=36, primary_key=True, serialize=False)),
                ('timestamp', models.BigIntegerField()),
                ('app_id', models.TextField()),
                ('phase_node', models.TextField()),
                ('event_type', models.TextField()),
                ('ip_address', models.GenericIPAddressField()),
                ('ph_size', models.BigIntegerField()),
                ('asn', models.BigIntegerField()),
                ('isp', models.TextField()),
                ('edge_location', models.TextField()),
                ('country', models.CharField(max_length=2)),
                ('city', models.TextField()),
                ('latitude', models.DecimalField(decimal_places=5, max_digits=9)),
                ('longitude', models.DecimalField(decimal_places=5, max_digits=9)),
            ],
        ),
    ]