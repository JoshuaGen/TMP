<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects');
    }

    public function show(string $slug)
    {
        return Inertia::render('ProjectDetail', [
            'slug' => $slug,
        ]);
    }
}
