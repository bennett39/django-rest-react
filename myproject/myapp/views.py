from django.contrib.auth.models import User, Group
from django.http import HttpResponse

from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer


def index(request):
    return HttpResponse("Hello World!")


class UserViewSet(viewsets.ModelViewSet):
    """ View & edit users via API endpoint """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """ View & edit groups via API endpoint """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
