---
layout: page
title: Main Sidebar Component
---

The sidebar used in this page to the left provides an example of what your sidebar would look like. Construction of a sidebar: 

```html
<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="index3.html" class="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
         style="opacity: .8">
    <span class="brand-text font-weight-light">AdminLTE 3</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block">Alexander Pierce</a>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="13" r="2" /><line x1="13.45" y1="11.55" x2="15.5" y2="9.5" /><path d="M6.4 20a9 9 0 1 1 11.2 0z" /></svg>
            <p>
              Starter Pages
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class="nav-link active">
                <i class="far fa-circle nav-icon"></i>
                <p>Active Page</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Inactive Page</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5h11" /><path d="M12 7l2 -2l-2 -2" /><path d="M5 3l-2 2l2 2" /><path d="M19 10v11" /><path d="M17 19l2 2l2 -2" /><path d="M21 12l-2 -2l-2 2" /><rect x="3" y="10" width="11" height="11" rx="2" /></svg>
            <p>
              Simple Link
              <span class="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
```
{: .max-height-300}


#### Alternate Logo

You can use two logo images instead of logo with text, you only need to change the markup to this:

```html
<a href="#" class="brand-link logo-switch">
  <img src="dist/img/logo-xs.png" alt="AdminLTE Docs Logo Small" class="brand-image-xl logo-xs">
  <img src="dist/img/logo-xl.png" alt="AdminLTE Docs Logo Large" class="brand-image-xs logo-xl" style="left: 12px">
</a>
```
> Example from v3.0 docs.

Based on the example above, you can replace `.brand-image-xl` on `.logo-xs` with `.brand-image-xs` or vice versa on `.logo-xl` for changed logo sizes.

#### Brand with Pushmenu Button

You can place the pushmenu button inside the brand, simply replace the brand-link code with the code below:

```html
<div class="brand-link d-flex justify-content-between align-items-center">
  <a class="brand-link" href="index3.html">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3">
    <span class="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  <a class="pushmenu" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
</div>
```

#### Search Form in Sidebar

You can add this code above user-panel or nav-sidebar:

```html
<form class="form-inline">
  <div class="input-group">
    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
    <div class="input-group-append">
      <button class="btn btn-sidebar" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>
      </button>
    </div>
  </div>
</form>
```
{: .max-height-300}


#### Sidebar Custom Area

You can add a Custom Area inside the Sidebar to display extra buttons or text below your menu entries.

You can simply add this code after the `div.sidebar`:

```html
<div class="sidebar-custom">
  <a href="#" class="btn btn-link"><i class="fas fa-cogs"></i></a>
  <a href="#" class="btn btn-secondary hide-on-collapse pos-right">Help</a>
</div>
```

> ##### Warning!
> The Sidebar Custom Area works only with `.layout-fixed` enabled.
{: .quote-warning}


#### Additional Classes

##### Sidebar

- `.sidebar-no-expand` Disables Auto Expand on Hover/Focus

##### Navbar

- `.nav-child-indent` Child indent
- `.nav-compact` Compact nav items
- `.nav-flat` Flat nav style
- `.nav-legacy` Legacy v2 nav style
- `.nav-collapse-hide-child` Hide nav item submenus on collapsed sidebar


> ##### Tip!
> You can also use `.text-sm` on `.nav-sidebar` or `.brand-link` for smaller font.
{: .quote-info}

For more information about the JS part of the sidebar, please visit the [PushMenu plugin page]({% link javascript/push-menu.md %})
