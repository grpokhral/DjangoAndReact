
from django.shortcuts import render
# from DjangoReact.App.models import Category
# from DjangoReact.App.models import Comment
# from DjangoReact.App.models import About
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BlogSerializer, AboutSerializer, CommentSerializer, CategorySerializer
# from rest_framework.generics import ListAPIView
from App.models import Blog, About, Comment, Category


# Create your views here.
# @api_view(['GET'])
# def apiOverView(request):
#     api_urls = {
#         'List': '/bloglist',
#         'Detail view': '/detailist/<str:pk/'
#     }

#     return Response(api_urls)

@api_view(['GET'])
def CategoryList(request):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer(queryset, many=True)
    return Response(serializer_class.data)


@api_view(['GET'])
def BlogList(request):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer(
        queryset, many=True, context={'request': request})
    data = serializer_class.data
    return Response({"data": data})


@api_view(['GET'])
def DetailList(request, pk):
    queryset = Blog.objects.get(id=pk)
    serializer_class = BlogSerializer(
        queryset, context={'request': request})
    data = serializer_class.data
    return Response({"data": data})


@api_view(['GET'])
def CommentList(request):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer(queryset, many=True)
    return Response(serializer_class.data)


@api_view(['POST'])
def CreateComment(request):
    serializer_class = CommentSerializer(data=request.data)

    if serializer_class.is_valid():
        serializer_class.save()

    return Response(serializer_class.data)


@api_view(['GET'])
def AboutList(request):
    queryset = About.objects.all()
    serializer_class = AboutSerializer(
        queryset, many=True, context={'request': request})
    data = serializer_class.data
    return Response({"data": data})
