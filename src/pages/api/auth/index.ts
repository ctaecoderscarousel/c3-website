import type { NextApiRequest, NextApiResponse } from 'next'
import { adminAuth } from '../../../utils/firebaseAdminInit'
import { prisma } from '../../../utils/prismaClientInit'

export default async function authHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method, headers } = req
    if (headers && headers.authorization) {
        if (method === 'GET') {
            const accessToken = headers.authorization.split(' ')[1]

            try {
                const user = await adminAuth.verifyIdToken(accessToken!)               
                const { email, name, user_id } = user

                const result = await prisma.user.findUnique({
                    where: {
                        user_id: user_id,
                    },
                })

                if (!result) {
                    await prisma.user.create({
                        data: {
                            user_id,
                            email: email as string,
                            name,
                        },
                    })
                }

                res.status(200).json({
                    message: 'User fetched',
                    result: user,
                })
            } catch (err: any) {
                res.status(405).json({
                    err,
                })
            }
        } else {
            res.status(405).json({
                message: 'Method Not Allowed',
            })
        }
    }
}
