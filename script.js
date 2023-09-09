function threeSum(arr, target) {
	for(let i=0;i<arr.length-2;i++)
		{
			let sum=0;
			for(let j=i+1;j<arr.length-1;j++)
			{
				for(let k=j+1;k<arr.length;k++)
					{
						sum+=arr[i]+arr[j]+arr[k];
						if(sum<=target)
						{
							return sum;
						}
					}
			}
		}
// write your code here
  
}

module.exports = threeSum;
