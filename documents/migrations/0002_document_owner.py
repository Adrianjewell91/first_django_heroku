# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-15 04:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='owner',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
