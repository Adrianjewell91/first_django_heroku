from rest_framework import serializers
from documents.models import Document
from documents.models import Translation

class DocumentSerializer(serializers.ModelSerializer):
    translations = serializers.StringRelatedField(many=True, required=False)
    class Meta:
        model = Document
        fields = ('id','title','body','language','translations','owner')
    # id=serializers.IntegerField(read_only=True)
    # title=serializers.CharField(required=False, allow_blank=True, max_length=100)
    # body=serializers.CharField(style={'base_template': 'textarea.html'})
    # language=serializers.CharField(required=False)

    # def create(self,validated_data):
    #     return Document.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #     instance.title=validated_data.get('title', instance.title)
    #     instance.body=validated_data.get('body', instance.body)
    #     instance.language=validated_data.get('language', instance.language)
    #     instance.save()
    #     return instance

class TranslationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Translation
        fields = ('id','title','body','language', 'doc_id', 'owner')
