  class Vec3
{
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;

 }
        min()
        {
                var min = this.x
                if
                {
                 min > this.y
                min = this.y;
                }
                if
                {
                min > this.z
                min = this.z;
                }
                return min;
        }

         max()
        {
                var max = this.x;
                if
                {
                 this.y > max
                max = this.y;
                }
                if
                {
                 this.z > max
                max = this.z;
                }
                return max;
        }

         mid()
        {
                var mid = this.x;
                if
                {
                 mid > this.y
                mid = this.y;
                }
