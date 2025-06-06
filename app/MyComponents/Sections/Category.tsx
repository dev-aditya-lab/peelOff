"use client";


import CardDemo from '@/app/MyComponents/CategoryCard'
import React from 'react'

export default function Category() {

    const categories = [
        { title: 'Category 1', description: 'Description 1', imageUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80' },
        { title: 'Category 2', description: 'Description 2', imageUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80' },
        { title: 'Category 3', description: 'Description 3', imageUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80' },
        { title: 'Category 4', description: 'Description 4', imageUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80' },
        { title: 'Category 5', description: 'Description 5', imageUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80' },
    ];
return (
    <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
            type="button"
            aria-label="Scroll Left"
            className="absolute left-0 z-10 bg-white rounded-full shadow p-2 flex items-center justify-center"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => {
                const container = document.getElementById('category-scroll-container');
                if (container) {
                    const card = container.querySelector('div');
                    const cardWidth = card ? (card as HTMLElement).offsetWidth : 200;
                    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                }
            }}
        >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <section
            id="category-scroll-container"
            className="p-5 flex items-center gap-5 overflow-x-auto whitespace-nowrap scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <style>
                {`
                    #category-scroll-container::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
            {categories.map((category, index) => (
                <CardDemo
                    key={index}
                    title={category.title}
                    description={category.description}
                    imageUrl={category.imageUrl}
                />
            ))}
        </section>

        {/* Right Arrow */}
        <button
            type="button"
            aria-label="Scroll Right"
            className="absolute right-0 z-10 bg-white rounded-full shadow p-2 flex items-center justify-center"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => {
                const container = document.getElementById('category-scroll-container');
                if (container) {
                    const card = container.querySelector('div');
                    const cardWidth = card ? (card as HTMLElement).offsetWidth : 200;
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }}
        >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
)
}
