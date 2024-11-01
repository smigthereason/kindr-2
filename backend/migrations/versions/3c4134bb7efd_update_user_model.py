"""update user model

Revision ID: 3c4134bb7efd
Revises: 
Create Date: 2024-08-14 17:50:08.604485

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3c4134bb7efd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('phonenumber',
               existing_type=sa.VARCHAR(length=20),
               type_=sa.Integer(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('phonenumber',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=20),
               existing_nullable=True)

    # ### end Alembic commands ###
