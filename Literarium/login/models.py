from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
class UserProfile(AbstractUser):
    refer_id=models.UUIDField(default=uuid.uuid4)
    college=models.CharField(max_length=80, null=True)
    # compis=models.ListCharField(    
    #     base_field=models.CharField(max_length=40),
    #     size=30,
    #     max_length=(30 * 41)  # 6 * 10 character nominals, plus commas
    # )