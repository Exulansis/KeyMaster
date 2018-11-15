import * as wallet from 'ethereumjs-wallet'
import { privToDid, getRandPriv, privToAddress, privToPublic } from './'

const priv = Buffer.from('efefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefef', 'hex')

console.log(privToAddress(priv))
console.log(privToDid(priv))
