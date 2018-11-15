import * as wallet from 'ethereumjs-wallet'
import * as crypto from 'crypto'
import * as secp256k1 from 'secp256k1'
import { keccak256 } from 'ethereumjs-util'

export const getRandPriv = (): string => new wallet(crypto.randomBytes(32)).getPrivateKey().toString('hex')
export const privToAddress = (key: Buffer) : string => new wallet(key).getAddress().toString('hex')
export const privToPublic = (key: Buffer) : string => secp256k1.publicKeyCreate(key).toString('hex')
export const privToDid = (key: Buffer) => `did:jolo:${keccak256(secp256k1.publicKeyCreate(key)).toString('hex')}`
