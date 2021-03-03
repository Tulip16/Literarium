from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
class UserProfile(AbstractUser):
    refer_id=models.UUIDField(default=uuid.uuid4)
    college=models.CharField(max_length=80, null=True)
