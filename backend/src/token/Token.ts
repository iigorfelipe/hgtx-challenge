import { Secret, sign, verify } from 'jsonwebtoken';

class Token {
  private SECRET = process.env.JWT_PASS as Secret;

  createToken = (user: object) => sign(user, this.SECRET, { expiresIn: '4h' });

  decodeToken = (token: string) => verify(token, this.SECRET);
}

export default Token;
