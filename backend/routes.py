from flask import request, jsonify
from models import User, Testimonial, AidDistribution, Donation,Contact, Charity,Payment # Import Donation model
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from app import app, db  # Ensure these imports are after app.py is set up

jwt = JWTManager(app)

@app.route('/')
def home():
    return jsonify({'message': 'Hello, World!'})

@app.route('/users', methods=['GET'])
@jwt_required()
def get_all_users():
    users = User.query.all()
    serialized_users = [{'id': user.id, 'username': user.username, 'email': user.email,
                         'password': user.password, 'phonenumber': user.phonenumber} for user in users]
    return jsonify({'users': serialized_users})

@app.route('/users', methods=['POST'])
def create_user():
    user_data = request.get_json()
    if 'username' not in user_data or 'email' not in user_data or 'password' not in user_data:
        return jsonify({'message': 'Username, email, and password are required'}), 400
    existing_user = User.query.filter_by(email=user_data['email']).first()
    if existing_user:
        return jsonify({'message': 'User with this email already exists'}), 400
    hashed_password = generate_password_hash(user_data['password'], method='pbkdf2:sha256', salt_length=16)

    new_user = User(
        username=user_data['username'],
        email=user_data['email'],
        password=hashed_password,
        phonenumber=user_data.get('phonenumber')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User signed successfully', 'user_id': new_user.id}), 201

@app.route('/login', methods=['POST'])
def login():
    user_data = request.get_json()

    if not user_data:
        return jsonify({'message': 'No data provided'}), 400

    email = user_data.get('email')
    password = user_data.get('password')

    if not isinstance(password, str):
        return jsonify({'message': 'Password must be a string'}), 400

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token), 200

    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/login', methods=['GET'])
@jwt_required()
def validate_token():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    if user:
        return jsonify({'message': 'Token is valid', 'user': {'id': user.id, 'username': user.username, 'email': user.email}}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

# @app.route('/login', methods=['POST'])
# def login():
#     user_data = request.get_json()
#     user = User.query.filter_by(email=user_data['email']).first()
#     if user and check_password_hash(user.password, user_data['password']):
#         access_token = create_access_token(identity=user.id)
#         return jsonify(access_token=access_token), 200
#     return jsonify({'message': 'Invalid credentials'}), 401

# @app.route('/login', methods=['GET'])
# @jwt_required()
# def validate_token():
#     current_user_id = get_jwt_identity()
#     user = User.query.get(current_user_id)
    
#     if user:
#         return jsonify({'message': 'Token is valid', 'user': {'id': user.id, 'username': user.username, 'email': user.email}}), 200
#     else:
#         return jsonify({'message': 'User not found'}), 404

@app.route('/donate', methods=['POST'])
def donate():
    data = request.json
    new_donation = Donation(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        comment=data.get('comment'),
        agree_to_terms=data['agree_to_terms'],
        subscribe_monthly=data['subscribe_monthly'],
        donation_amount=data['donation_amount']
    )
    db.session.add(new_donation)
    db.session.commit()
    return jsonify({"message": "Donation successful"}), 201

@app.route('/donors', methods=['GET'])
def get_donors():
    donations = Donation.query.all()
    serialized_donors = [
        {
            'first_name': donation.first_name,
            'last_name': donation.last_name,
            'email': donation.email,
            'comment': donation.comment,
            'agree_to_terms': donation.agree_to_terms,
            'subscribe_monthly': donation.subscribe_monthly,
            'donation_amount': donation.donation_amount,
            'created_at': donation.created_at
        }
        for donation in donations
    ]
    return jsonify({'donors': serialized_donors})

@app.route('/testimonials', methods=['POST'])
def add_testimonial():
    data = request.json
    new_testimonial = Testimonial(
        content=data['content'],
        user_id=data['user_id']
    )
    db.session.add(new_testimonial)
    db.session.commit()
    return jsonify({"message": "Testimonial added"}), 201

@app.route('/testimonials', methods=['GET'])
def get_testimonials():
    testimonials = Testimonial.query.all()
    return jsonify([t.content for t in testimonials])

@app.route('/distributions', methods=['POST'])
def post_aid_distribution():
    data = request.json
    new_aid_distribution = AidDistribution(
        beneficiary_name=data['beneficiary_name'],
        amount=data['amount'],
        description=data['description']
    )
    db.session.add(new_aid_distribution)
    db.session.commit()
    return jsonify({"message": "Aid distribution posted"}), 201

@app.route('/distributions', methods=['GET'])
def get_aid_distributions():
    distributions = AidDistribution.query.all()
    return jsonify([
        {
            'beneficiary_name': d.beneficiary_name,
            'amount': d.amount,
            'description': d.description
        }
        for d in distributions
    ])

@app.route('/contacts', methods=['POST'])
def add_contact():
    data = request.json
    new_contact = Contact(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        phonenumber=data.get('phonenumber'),
        description=data['description']
    )
    db.session.add(new_contact)
    db.session.commit()
    return jsonify({"message": "Contact added successfully"}), 201

@app.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    serialized_contacts = [
        {
            'id': contact.id,
            'first_name': contact.first_name,
            'last_name': contact.last_name,
            'email': contact.email,
            'phonenumber': contact.phonenumber,
            'description': contact.description
        }
        for contact in contacts
    ]
    return jsonify({'contacts': serialized_contacts}), 200

# User Admin
@app.route('/charity', methods=['POST'])
def add_charity():
    data = request.json
    new_charity = Charity(
        first_name=data['first_name'],
        last_name=data['last_name'],
        image=data['image'],
        amount=data.get('amount'),
        email=data['email'],
        document=data['document']
    )
    db.session.add(new_charity)
    db.session.commit()
    return jsonify({"message": "Charity added successfully"}), 201

@app.route('/charity', methods=['GET'])
def get_charity():
    charity = Charity.query.all()
    serialized_charity = [
        {
            'id': charity.id,
            'first_name': charity.first_name,
            'last_name': charity.last_name,
            'image': charity.image,
            'amount': charity.amount,
            'document': charity.document
        }
        for charity in charity
    ]
    return jsonify({'charity': serialized_charity}), 200

@app.route('/charity/<int:id>', methods=['DELETE'])
def delete_charity(id):
    try:
        # Find the charity record by ID
        charity = Charity.query.get(id)
        
        # Check if the record exists
        if not charity:
            return jsonify({"error": "Charity not found"}), 404

        # Delete the charity record
        db.session.delete(charity)
        db.session.commit()

        return jsonify({"message": "Charity record deleted successfully!"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/payment', methods=['POST'])
def add_payment():
    data = request.json
    new_payment = Payment(
        amount=data.get('amount'),
        email=data['email'],
      
    )
    db.session.add(new_payment)
    db.session.commit()
    return jsonify({"message": "Payment added successfully"}), 201

@app.route('/payment', methods=['GET'])
def get_payment():
    payment = Payment.query.all()
    serialized_payment = [
        {
            'email': payment.email,
            'amount': payment.amount,
          
        }
        for payment in payment
    ]
    return jsonify({'charity': serialized_payment}), 200