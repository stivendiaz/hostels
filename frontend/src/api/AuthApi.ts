// import { atom } from 'nanostores';
import type AuthModel from '../types/auth';
import type UserModel from '../types/user';
import { session } from '../store/authStore';

// Move to global constants
const apiUrl = 'http://localhost:3001';

class ApiBuilder<T> {
  entity: string;
  dataStore: any;

  constructor(entity: string) {
    this.entity = entity;
  }

  private handleResponse(response: Response): Promise<any> {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }

  private async request(
    url: string,
    method: string,
    body?: any,
    headers?: any,
  ): Promise<any> {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    // TODO: use response from back
    if (response.status === 401) {
      throw new Error('Unauthorized');
    }

    return this.handleResponse(response);
  }

  async login(item: T): Promise<string> {
    const data = await this.request(
      `${apiUrl}/${this.entity}/login`,
      'POST',
      item,
    );

    session.setKey('accessToken', data.data.accessToken);
    session.setKey('refreshToken', data.data.refreshToken);

    console.log('session:api', session);

    return data.data;
  }

  async logout(item: T, token?: string): Promise<string> {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('headers', headers);
    const data = await this.request(
      `${apiUrl}/${this.entity}/logout`,
      'POST',
      item,
      headers,
    );

    session.setKey('accessToken', '');
    session.setKey('refreshToken', '');

    return data.data;
  }

  async isAuthenticated(item: T): Promise<UserModel> {
    const data = await this.request(
      `${apiUrl}/${this.entity}/is-authenticated`,
      'POST',
      item,
    );
    this.dataStore.set([...this.dataStore.get(), data.data]);
    return data.data;
  }

  async refresh(): Promise<string> {
    const data = await this.request(`${apiUrl}/${this.entity}/refresh`, 'POST');
    this.dataStore.set([...this.dataStore.get(), data.data]);
    return data.data;
  }
}

export const AuthApi = new ApiBuilder<AuthModel>('auth');
