export default function can_bbox ({ next, store })
{
    if (window.Laravel.jsPermissions.permissions.includes('create boxes')) return next();

    else window.location.href = '/';
}
