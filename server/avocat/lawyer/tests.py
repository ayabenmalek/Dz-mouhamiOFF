from django.test import TestCase
from django.urls import reverse


class YourTestCase(TestCase):
    def test_example(self):
        response = self.client.get(reverse('register'))
        self.assertEqual(response.status_code, 200)


