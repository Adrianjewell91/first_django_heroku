# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-14 21:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='translation',
            name='doc_id',
            field=models.CharField(blank=True, default=b'', max_length=10),
        ),
    ]
