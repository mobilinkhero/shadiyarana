'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiCheck, FiCircle } from 'react-icons/fi';

export default function ChecklistPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Book Venue', category: '6-12 Months Before', completed: true },
    { id: 2, title: 'Hire Photographer', category: '6-12 Months Before', completed: true },
    { id: 3, title: 'Book Caterer', category: '6-12 Months Before', completed: false },
    { id: 4, title: 'Choose Decorator', category: '4-6 Months Before', completed: false },
    { id: 5, title: 'Book Makeup Artist', category: '4-6 Months Before', completed: false },
    { id: 6, title: 'Order Wedding Dress', category: '4-6 Months Before', completed: false },
    { id: 7, title: 'Send Invitations', category: '2-3 Months Before', completed: false },
    { id: 8, title: 'Finalize Guest List', category: '2-3 Months Before', completed: false },
    { id: 9, title: 'Book DJ/Music', category: '2-3 Months Before', completed: false },
    { id: 10, title: 'Arrange Transportation', category: '1 Month Before', completed: false },
    { id: 11, title: 'Final Venue Visit', category: '1 Month Before', completed: false },
    { id: 12, title: 'Confirm All Vendors', category: '1 Week Before', completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const categories = ['6-12 Months Before', '4-6 Months Before', '2-3 Months Before', '1 Month Before', '1 Week Before'];
  const completedCount = tasks.filter(t => t.completed).length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-red-800">Shadiyarana</Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-red-800">Home</Link>
            <Link href="/vendors" className="text-gray-700 hover:text-red-800">Vendors</Link>
            <Link href="/budget" className="text-gray-700 hover:text-red-800">Budget</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Wedding Checklist</h1>
        <p className="text-gray-600 mb-8">Stay organized and on track for your big day</p>

        {/* Progress Card */}
        <div className="bg-gradient-to-r from-red-800 to-red-900 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Overall Progress</p>
              <p className="text-4xl font-bold">{Math.round(progress)}%</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">{completedCount}/{tasks.length}</p>
              <p className="text-sm opacity-90">Tasks Completed</p>
            </div>
          </div>
          <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
            <div
              className="bg-white rounded-full h-3 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Checklist by Category */}
        {categories.map((category) => {
          const categoryTasks = tasks.filter(t => t.category === category);
          if (categoryTasks.length === 0) return null;

          return (
            <div key={category} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{category}</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {categoryTasks.map((task, index) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition ${
                      index !== categoryTasks.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition ${
                      task.completed
                        ? 'bg-green-500 text-white'
                        : 'border-2 border-gray-300 text-gray-300'
                    }`}>
                      {task.completed ? <FiCheck /> : <FiCircle className="w-3 h-3" />}
                    </div>
                    <span className={`flex-1 ${
                      task.completed ? 'line-through text-gray-400' : 'text-gray-900'
                    }`}>
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
