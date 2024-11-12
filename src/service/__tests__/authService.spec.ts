import { authService } from '../authService';
import { User } from '@/user/entities';

describe('AUTHSERVICE', () => {
    beforeEach(() => {
        // Limpiar el almacenamiento local antes de cada prueba
        localStorage.clear();
    });

    describe('IS AUTHENTICATED', () => {
        it('When the user is stored in localStorage, then it should return true', () => {
            // Arrange
            const mockUser: User = {
                JWT: 'mockJWT',
                id: '123',
                email: 'test@example.com',
                role: 'user',
            };
            localStorage.setItem('user', JSON.stringify(mockUser));

            // Act
            const result = authService.isAuthenticated();

            // Assert
            expect(result).toBe(true);
        });

        it('When no user is stored in localStorage, then it should return false', () => {
            // Arrange - No user is set in localStorage

            // Act
            const result = authService.isAuthenticated();

            // Assert
            expect(result).toBe(false);
        });
    });

    describe('GET USER', () => {
        it('When the user is stored in localStorage, then it should return the user', () => {
            // Arrange
            const mockUser: User = {
                JWT: 'mockJWT',
                id: '123',
                email: 'test@example.com',
                role: 'user',
            };
            localStorage.setItem('user', JSON.stringify(mockUser));

            // Act
            const user = authService.getUser();

            // Assert
            expect(user).toEqual(mockUser);
        });

        it('When no user is stored in localStorage, then it should return null', () => {
            // Arrange - No user is set in localStorage

            // Act
            const user = authService.getUser();

            // Assert
            expect(user).toBeNull();
        });
    });

    describe('LOGIN', () => {
        it('When login is called, then it should store the user in localStorage', () => {
            // Arrange
            const mockUser: User = {
                JWT: 'mockJWT',
                id: '123',
                email: 'test@example.com',
                role: 'user',
            };

            // Act
            authService.login(mockUser);

            // Assert
            const storedUser = localStorage.getItem('user');
            expect(storedUser).toBe(JSON.stringify(mockUser));
        });
    });

    describe('LOGOUT', () => {
        it('When logout is called, then it should remove the user from localStorage', () => {
            // Arrange
            const mockUser: User = {
                JWT: 'mockJWT',
                id: '123',
                email: 'test@example.com',
                role: 'user',
            };
            localStorage.setItem('user', JSON.stringify(mockUser));

            // Act
            authService.logout();

            // Assert
            expect(localStorage.getItem('user')).toBeNull();
        });
    });

});
