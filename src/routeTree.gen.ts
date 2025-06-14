/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as publicRouteImport } from './routes/(public)/route'
import { Route as authRouteImport } from './routes/(auth)/route'
import { Route as publicIndexImport } from './routes/(public)/index'
import { Route as publicAboutImport } from './routes/(public)/about'
import { Route as authSignUpImport } from './routes/(auth)/sign-up'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as publicAppRouteImport } from './routes/(public)/app/route'
import { Route as publicProductsIndexImport } from './routes/(public)/products/index'
import { Route as publicProductsIdImport } from './routes/(public)/products/$id'
import { Route as publicAppSettingsImport } from './routes/(public)/app/settings'
import { Route as publicAppDashboardImport } from './routes/(public)/app/dashboard'

// Create/Update Routes

const publicRouteRoute = publicRouteImport.update({
  id: '/(public)',
  getParentRoute: () => rootRoute,
} as any)

const authRouteRoute = authRouteImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRoute,
} as any)

const publicIndexRoute = publicIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => publicRouteRoute,
} as any)

const publicAboutRoute = publicAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => publicRouteRoute,
} as any)

const authSignUpRoute = authSignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => authRouteRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => authRouteRoute,
} as any)

const publicAppRouteRoute = publicAppRouteImport.update({
  id: '/app',
  path: '/app',
  getParentRoute: () => publicRouteRoute,
} as any)

const publicProductsIndexRoute = publicProductsIndexImport.update({
  id: '/products/',
  path: '/products/',
  getParentRoute: () => publicRouteRoute,
} as any)

const publicProductsIdRoute = publicProductsIdImport.update({
  id: '/products/$id',
  path: '/products/$id',
  getParentRoute: () => publicRouteRoute,
} as any)

const publicAppSettingsRoute = publicAppSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => publicAppRouteRoute,
} as any)

const publicAppDashboardRoute = publicAppDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => publicAppRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authRouteImport
      parentRoute: typeof rootRoute
    }
    '/(public)': {
      id: '/(public)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicRouteImport
      parentRoute: typeof rootRoute
    }
    '/(public)/app': {
      id: '/(public)/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof publicAppRouteImport
      parentRoute: typeof publicRouteImport
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof authRouteImport
    }
    '/(auth)/sign-up': {
      id: '/(auth)/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof authSignUpImport
      parentRoute: typeof authRouteImport
    }
    '/(public)/about': {
      id: '/(public)/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof publicAboutImport
      parentRoute: typeof publicRouteImport
    }
    '/(public)/': {
      id: '/(public)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicIndexImport
      parentRoute: typeof publicRouteImport
    }
    '/(public)/app/dashboard': {
      id: '/(public)/app/dashboard'
      path: '/dashboard'
      fullPath: '/app/dashboard'
      preLoaderRoute: typeof publicAppDashboardImport
      parentRoute: typeof publicAppRouteImport
    }
    '/(public)/app/settings': {
      id: '/(public)/app/settings'
      path: '/settings'
      fullPath: '/app/settings'
      preLoaderRoute: typeof publicAppSettingsImport
      parentRoute: typeof publicAppRouteImport
    }
    '/(public)/products/$id': {
      id: '/(public)/products/$id'
      path: '/products/$id'
      fullPath: '/products/$id'
      preLoaderRoute: typeof publicProductsIdImport
      parentRoute: typeof publicRouteImport
    }
    '/(public)/products/': {
      id: '/(public)/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof publicProductsIndexImport
      parentRoute: typeof publicRouteImport
    }
  }
}

// Create and export the route tree

interface authRouteRouteChildren {
  authLoginRoute: typeof authLoginRoute
  authSignUpRoute: typeof authSignUpRoute
}

const authRouteRouteChildren: authRouteRouteChildren = {
  authLoginRoute: authLoginRoute,
  authSignUpRoute: authSignUpRoute,
}

const authRouteRouteWithChildren = authRouteRoute._addFileChildren(
  authRouteRouteChildren,
)

interface publicAppRouteRouteChildren {
  publicAppDashboardRoute: typeof publicAppDashboardRoute
  publicAppSettingsRoute: typeof publicAppSettingsRoute
}

const publicAppRouteRouteChildren: publicAppRouteRouteChildren = {
  publicAppDashboardRoute: publicAppDashboardRoute,
  publicAppSettingsRoute: publicAppSettingsRoute,
}

const publicAppRouteRouteWithChildren = publicAppRouteRoute._addFileChildren(
  publicAppRouteRouteChildren,
)

interface publicRouteRouteChildren {
  publicAppRouteRoute: typeof publicAppRouteRouteWithChildren
  publicAboutRoute: typeof publicAboutRoute
  publicIndexRoute: typeof publicIndexRoute
  publicProductsIdRoute: typeof publicProductsIdRoute
  publicProductsIndexRoute: typeof publicProductsIndexRoute
}

const publicRouteRouteChildren: publicRouteRouteChildren = {
  publicAppRouteRoute: publicAppRouteRouteWithChildren,
  publicAboutRoute: publicAboutRoute,
  publicIndexRoute: publicIndexRoute,
  publicProductsIdRoute: publicProductsIdRoute,
  publicProductsIndexRoute: publicProductsIndexRoute,
}

const publicRouteRouteWithChildren = publicRouteRoute._addFileChildren(
  publicRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof publicIndexRoute
  '/app': typeof publicAppRouteRouteWithChildren
  '/login': typeof authLoginRoute
  '/sign-up': typeof authSignUpRoute
  '/about': typeof publicAboutRoute
  '/app/dashboard': typeof publicAppDashboardRoute
  '/app/settings': typeof publicAppSettingsRoute
  '/products/$id': typeof publicProductsIdRoute
  '/products': typeof publicProductsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof publicIndexRoute
  '/app': typeof publicAppRouteRouteWithChildren
  '/login': typeof authLoginRoute
  '/sign-up': typeof authSignUpRoute
  '/about': typeof publicAboutRoute
  '/app/dashboard': typeof publicAppDashboardRoute
  '/app/settings': typeof publicAppSettingsRoute
  '/products/$id': typeof publicProductsIdRoute
  '/products': typeof publicProductsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(auth)': typeof authRouteRouteWithChildren
  '/(public)': typeof publicRouteRouteWithChildren
  '/(public)/app': typeof publicAppRouteRouteWithChildren
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/sign-up': typeof authSignUpRoute
  '/(public)/about': typeof publicAboutRoute
  '/(public)/': typeof publicIndexRoute
  '/(public)/app/dashboard': typeof publicAppDashboardRoute
  '/(public)/app/settings': typeof publicAppSettingsRoute
  '/(public)/products/$id': typeof publicProductsIdRoute
  '/(public)/products/': typeof publicProductsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/app'
    | '/login'
    | '/sign-up'
    | '/about'
    | '/app/dashboard'
    | '/app/settings'
    | '/products/$id'
    | '/products'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/app'
    | '/login'
    | '/sign-up'
    | '/about'
    | '/app/dashboard'
    | '/app/settings'
    | '/products/$id'
    | '/products'
  id:
    | '__root__'
    | '/(auth)'
    | '/(public)'
    | '/(public)/app'
    | '/(auth)/login'
    | '/(auth)/sign-up'
    | '/(public)/about'
    | '/(public)/'
    | '/(public)/app/dashboard'
    | '/(public)/app/settings'
    | '/(public)/products/$id'
    | '/(public)/products/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  authRouteRoute: typeof authRouteRouteWithChildren
  publicRouteRoute: typeof publicRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  authRouteRoute: authRouteRouteWithChildren,
  publicRouteRoute: publicRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(auth)",
        "/(public)"
      ]
    },
    "/(auth)": {
      "filePath": "(auth)/route.tsx",
      "children": [
        "/(auth)/login",
        "/(auth)/sign-up"
      ]
    },
    "/(public)": {
      "filePath": "(public)/route.tsx",
      "children": [
        "/(public)/app",
        "/(public)/about",
        "/(public)/",
        "/(public)/products/$id",
        "/(public)/products/"
      ]
    },
    "/(public)/app": {
      "filePath": "(public)/app/route.tsx",
      "parent": "/(public)",
      "children": [
        "/(public)/app/dashboard",
        "/(public)/app/settings"
      ]
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx",
      "parent": "/(auth)"
    },
    "/(auth)/sign-up": {
      "filePath": "(auth)/sign-up.tsx",
      "parent": "/(auth)"
    },
    "/(public)/about": {
      "filePath": "(public)/about.tsx",
      "parent": "/(public)"
    },
    "/(public)/": {
      "filePath": "(public)/index.tsx",
      "parent": "/(public)"
    },
    "/(public)/app/dashboard": {
      "filePath": "(public)/app/dashboard.tsx",
      "parent": "/(public)/app"
    },
    "/(public)/app/settings": {
      "filePath": "(public)/app/settings.tsx",
      "parent": "/(public)/app"
    },
    "/(public)/products/$id": {
      "filePath": "(public)/products/$id.tsx",
      "parent": "/(public)"
    },
    "/(public)/products/": {
      "filePath": "(public)/products/index.tsx",
      "parent": "/(public)"
    }
  }
}
ROUTE_MANIFEST_END */
