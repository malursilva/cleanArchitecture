import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User repositor', () => {
  test('should return null if user not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@mail.com')
    expect(user).toBeNull()
  })
})