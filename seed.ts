import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.settings.upsert({ where:{ id:1 }, update:{}, create:{ id:1 } })
  await prisma.product.createMany({ data:[
    { sku:'TIR-195-65-R15', name:'إطار 195/65 R15', brand:'Bridgestone', category:'Tire', size:'195/65 R15', price:2700, stock:50, image:'https://images.unsplash.com/photo-1616410731309-1b713d29e265?q=80&w=1200&auto=format&fit=crop' },
    { sku:'BAT-70AH', name:'بطارية 70AH', brand:'ACDelco', category:'Battery', size:'70AH', price:3200, stock:30, image:'https://images.unsplash.com/photo-1604719312566-8912e9227fb3?q=80&w=1200&auto=format&fit=crop' }
  ], skipDuplicates:true })
  console.log('Seeded Settings + Products.')
}
main().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)})
