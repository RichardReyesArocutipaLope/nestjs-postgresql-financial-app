import { UseGuards, applyDecorators} from '@nestjs/common'
import { ValidRoles } from '../interfaces/valid-roles'
import { RolProtected } from './rol-protected.decorator'
import { AuthGuard } from '@nestjs/passport'
import { UserRoleGuard } from '../guards/user-role/user-role.guard'
import { PassportModule } from '@nestjs/passport';

export function Auth(...roles: ValidRoles[]){
    return applyDecorators(
        RolProtected(...roles),
        UseGuards(AuthGuard('jwt'), UserRoleGuard),
    )
}

