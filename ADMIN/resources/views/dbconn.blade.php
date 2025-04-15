<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel</title>
</head>
<body>
    <div>
        <?php
        use Illuminate\Support\Facades\DB;
            if(DB::connection()->getPdo()){
                echo "Succefully connected to DB and  DB name is".DB::connection()->getDatabaseName();
            }
            
            ?>
    </div>
</body>
</html>