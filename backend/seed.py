from app import create_app, db
from models import User, Donation, Testimonial, AidDistribution, Contact, Charity, Payment
from datetime import datetime

app = create_app()

def seed_data():
    with app.app_context():
        # Create the tables if they don't exist
        db.create_all()

        # Seed Users
        users = [
            User(username='john_doe', email='john@example.com', password='Password123', user_type='donor'),
            User(username='admin_user', email='admin@example.com', password='AdminPass1', user_type='admin'),
            User(username='charity_org', email='charity@example.com', password='Charity123', user_type='charity')
        ]

        # Seed Donations
        donations = [
            Donation(first_name='John', last_name='Doe', email='john@example.com', donation_amount=100.00, agree_to_terms=True, subscribe_monthly=False, comment='Happy to help!'),
            Donation(first_name='Jane', last_name='Smith', email='jane@example.com', donation_amount=50.00, agree_to_terms=True, subscribe_monthly=True, comment='Keep up the good work!')
        ]

        # Seed Testimonials
        testimonials = [
            Testimonial(content="This organization has changed my life!", user_id=1),
            Testimonial(content="I'm so grateful for the support!", user_id=2)
        ]

        # Seed Aid Distributions
        aid_distributions = [
            AidDistribution(beneficiary_name='Local School', amount=500.00, description='Provided funds for new school supplies.'),
            AidDistribution(beneficiary_name='Community Health Center', amount=300.00, description='Supported the health center with necessary equipment.')
        ]

        # Seed Contacts
        contacts = [
            Contact(first_name='Alice', last_name='Brown', email='alice@example.com', phonenumber=1234567890, description='Interested in volunteering.'),
            Contact(first_name='Bob', last_name='Johnson', email='bob@example.com', phonenumber=9876543210, description='Looking for more information on your programs.')
        ]

        # Seed Charities
        charities = [
            Charity(first_name='Charity1', last_name='Org1', image='image1.png', amount=1000, email='charity1@example.com', document='document1.pdf'),
            Charity(first_name='Charity2', last_name='Org2', image='image2.png', amount=2000, email='charity2@example.com', document='document2.pdf')
        ]

        # Seed Payments
        payments = [
            Payment(amount=150, email='donor1@example.com'),
            Payment(amount=250, email='donor2@example.com')
        ]

        # Add all seeded data to the session
        db.session.add_all(users + donations + testimonials + aid_distributions + contacts + charities + payments)
        
        # Commit the session to save data to the database
        db.session.commit()

        print("Database seeded successfully!")

if __name__ == '__main__':
    seed_data()
