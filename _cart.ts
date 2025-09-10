'use client'
export type CartItem = { id: string; name: string; price: number; image: string; qty: number }
const KEY='eim_cart_v2'
export const getCart=():CartItem[]=>{ if(typeof window==='undefined') return []; try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return []}}
export const setCart=(items:CartItem[])=>{ if(typeof window!=='undefined') localStorage.setItem(KEY, JSON.stringify(items)) }
export const addToCart=(item:CartItem)=>{ const c=getCart(); const i=c.findIndex(x=>x.id===item.id); if(i>=0)c[i].qty+=item.qty; else c.push(item); setCart(c) }
export const clearCart=()=>setCart([])
