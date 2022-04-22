from dataclasses import field
# from DjangoReact.App.models import Comment
# from DjangoReact.App.models import About
from rest_framework import serializers
from App.models import Blog, About, Comment, Category
from django.utils.html import strip_tags


class BlogSerializer(serializers.ModelSerializer):
    # image = serializers.ImageField(
    #     max_length=None, use_url=True, write_only=True)

    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)

    class Meta:
        model = Blog
        fields = ['id', 'category_name', 'title',
                  'short_disc', 'disc', 'image']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['disc'] = strip_tags(instance.disc)
        return data

    # def validate(self, data):
    #     print(data)
    #     self.context['image'] = self.context['request'].FILES.get('image')
    #     return data


class AboutSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)

    class Meta:
        model = About
        fields = ['id', 'short_disc', 'long_disc', 'image']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['long_disc'] = strip_tags(instance.long_disc)
        return data


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
